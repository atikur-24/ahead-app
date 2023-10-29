import Banner from "@/components/Banner";
import Eq from "@/components/Eq";
import Familiar from "@/components/Familiar";
import Improvement from "@/components/Improvement";
import Meet from "@/components/Meet";
import Started from "@/components/Started";
import WorkWithUs from "@/components/WorkWithUs";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Eq
        title={"EQ beats IQ"}
        firstContent={"People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships."}
        secondContent={"They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."}
      />
      <Familiar />
      <Meet />
      <Improvement />
      <Eq
        title={"Be the best you"}
        subTitle={"with EQ"}
        firstContent={"Not having your own emotions under control might be holding you back."}
        secondContent={"Additionally, not understanding those of others stops you from being parent, friend you can be."}
      />
      <Started />
      <WorkWithUs />
    </main>
  );
};

export default HomePage;
