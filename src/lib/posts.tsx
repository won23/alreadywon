import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { countBy } from 'lodash';

const postsDirectory = path.join(process.cwd(), 'src/pages/posts');
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
      const id = fileName.replace(/\.mdx$/, '');

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
