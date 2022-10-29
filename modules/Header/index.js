import { __pageTitle, __pageDesc } from 'config';

export default function Header() {
  return (
    <header>
      <h1>{__pageTitle}</h1>
      <h2>{__pageDesc}</h2>
    </header>
  );
}
