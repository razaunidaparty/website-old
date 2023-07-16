import MediaCta from "@components/molecules/MediaCta";

const About = () => {
  return (
    <section
      style={{
        background: "#f4f4f4",
        padding: "clamp(40px, 8vw, 80px) 15px",
      }}
    >
      <MediaCta
        title="What is La Raza Unida Party?"
        description="“La Raza Unida is a Chicano-Raza response to our people having no political power. La Raza Unida spread like wildfire in 1970 as chapters sprung up all over Aztlan. La Raza built a powerful organization that eventually had to come to terms with what path to take."
        video={{
          id: 845599550,
        }}
      />
    </section>
  );
};

export default About;
