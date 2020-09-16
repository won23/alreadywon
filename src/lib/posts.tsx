import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { countBy } from 'lodash';

const postsDirectory = path.join(process.cwd(), 'src/posts');
export interface IPost {
  id?: string;
  description?: string;
  tags?: string[];
  title?: string;
  date?: string;
}

export interface ISortedPostData {
  allPostsData: IPost[];
  uniqueTagCount: { [key: string]: number };
}

export function getSortedPostsData(): ISortedPostData {
  // Get file names under /posts
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((item) => (item === 'drafts' ? null : item)); // ignore any drafts
  let allTags = [];

  const allPostsData = fileNames.map(
    (fileName): IPost => {
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      allTags = [...matterResult.data.tags, ...allTags];
      return {
        id,
        ...matterResult.data,
      };
    }
  );

  const uniqueTagCount = countBy(allTags);

  // Sort posts by date
  const sorted = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    allPostsData: sorted,
    uniqueTagCount,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
