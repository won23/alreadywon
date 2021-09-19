function formatTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^:]*$/gi, '') // remove subtitle
    .replace(/ /gi, '-') // replace spaces with dashes
    .replace(/[:'.,]/gi, ''); //remove special chars
}

export { formatTitle };
