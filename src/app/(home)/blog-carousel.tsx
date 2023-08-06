import LargeButtonLink from '@/components/large-button-link';

export default function BlogCarousel() {
  return (
    <section className="mb-20">
      <h2 className="mb-4">
        Mise En Scene <span className="text-accent">Blog</span>
      </h2>
      <LargeButtonLink href="https://blog.warwick.film">
        Read More
      </LargeButtonLink>
    </section>
  );
}
