const SectionLayout = ({children, className}) => {

  const styles = `my-8 py-8 relative ${className}`;

  return (
    <section className={styles}>
      {children}
    </section>
  )
}

export default SectionLayout;
