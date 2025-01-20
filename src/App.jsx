import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import cat1 from "/src/assets/cat-1.png";
import cat2 from "/src/assets/cat-2.png";
import cat3 from "/src/assets/cat-3.png";
import dog1 from "/src/assets/dog-1.png";
import dog2 from "/src/assets/dog-2.png";
import dog3 from "/src/assets/dog-3.png";

function App() {
  const cards = [
    {
      id: 1,
      name: "Luna",
      image: cat1,
      shortDescription: "A calm and affectionate black cat.",
      fullDescription:
        "Luna is a serene black cat with a shiny coat. She enjoys cuddling, purring, and spending quiet evenings by your side. She’s the perfect companion for someone looking for a loving and gentle pet.",
    },

    {
      id: 2,
      name: "Mittens",
      image: cat2,
      shortDescription: "A curious kitten with white paws.",
      fullDescription:
        "Mittens is a curious and adventurous young cat who loves exploring her surroundings. Her white paws and bright personality make her a joy to have around.",
    },

    {
      id: 3,
      name: "Whiskers",
      image: cat3,
      shortDescription: "A playful tabby with green eyes.",
      fullDescription:
        "Whiskers is an energetic and playful tabby cat who loves to chase toys and nap in sunny spots. She is very friendly and enjoys being around people.",
    },

    {
      id: 4,
      name: "Buddy",
      image: dog1,
      shortDescription: "A friendly golden retriever with a big heart.",
      fullDescription:
        "Buddy is a loyal and cheerful golden retriever who loves playing fetch and going on long walks. He’s great with kids and other pets, making him the ideal family dog.",
    },
    {
      id: 5,
      name: "Bella",
      image: dog2,
      shortDescription: "An energetic border collie with sharp instincts.",
      fullDescription:
        "Bella is an intelligent and energetic border collie who thrives on activity and mental stimulation. She excels at learning tricks and would be perfect for an active owner who loves outdoor adventures.",
    },
    {
      id: 6,
      name: "Max",
      image: dog3,
      shortDescription: "A gentle giant of a St. Bernard.",
      fullDescription:
        "Max is a calm and loving St. Bernard who enjoys lounging around and giving big hugs. His gentle demeanor makes him an excellent companion for anyone seeking a big, fluffy friend.",
    },
  ];

  return (
    <>
      <Nav />

      <Hero />
      <CardContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            src={card.image}
            title={card.name}
            short={card.shortDescription}
            full={card.fullDescription}
          />
        ))}
      </CardContainer>
      <Footer />
    </>
  );
}

export default App;
