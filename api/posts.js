import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { __postsDirectory } from 'config';

function readFileSystem() {
  return fs.readdirSync(__postsDirectory);
}

const getSlugByFileName = (fileName) => fileName.replace(/\.md$/, '');

const getPostByName = (fileName, summaryOnly = false) => {
  const slug = getSlugByFileName(fileName);
  const fullPath = join(__postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const { title, date } = data;
  if (summaryOnly) return { slug, title, date };
  return { slug, title, date, content };
};

export function getPosts(summaryOnly = false) {
  return readFileSystem().map((fileName) =>
    getPostByName(fileName, summaryOnly)
  );
}

export function getPostBySlug(slug) {
  const fullPath = join(__postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { title, date } = data;
  return { slug, title, date, content };
}
