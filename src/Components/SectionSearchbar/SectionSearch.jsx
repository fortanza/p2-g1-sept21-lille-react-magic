import RotateLogo from './RotateLogo/RotateLogo';
import SearchBar from './SearchBar/SearchBar';
import './SectionSearch.css';

export default function SectionSearch() {
  return (
    <section className={['container', 'sectionSearchbar'].join(' ')}>
      <RotateLogo />
      <SearchBar />
    </section>
  );
}
