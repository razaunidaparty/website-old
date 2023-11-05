import Page from "@components/templates/page";
import Section from "@components/templates/section";

export default function JoinPage() {
  return (
    <Page
      title="Join Now"
      cover={{
        src: "/cover/donate_cover.jpg",
        alt: "Raza Unida Party Study Group",
        theme: "dark",
      }}
    >
      <Section>
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
          }}
        >
          To become eligible to be a member of the Partido, you must complete a
          set number of Study Group Sessions. If you would just like to support
          the work of the Partido, we invite you to engage with us on social
          media platforms, attend our political education events and actions.
        </p>
      </Section>
    </Page>
  );
}
