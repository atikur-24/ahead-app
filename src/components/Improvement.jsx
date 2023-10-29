import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "It's not as easy as 1-2-3.",
    description: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    label: "Old habits are hard to break.",
    description: "And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use",
  },
  {
    label: "You and your motivation don't have a long-term relationship.",
    description: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.",
  },
  {
    label: "Books just don't offer practical solutions.",
    description: "Remember when vou leamed to ride a hike iust hv reading? Yeah. we don't either",
  },
];

const Improvement = () => {
  return (
    <section className="my-container">
      <div className="px-10 lg:px-16 pb-6 lg:pb-16 space-y-2 lg:space-y-3">
        <p className="font-medium">Wrong with self-improvement & how we&apos;re fixing it.</p>
        <h2 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-semibold lg:font-bold">Self-improvement. Ugh.</h2>
      </div>
      <div className="mx-40">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={true} orientation="vertical">
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>{step.description}</StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </section>
  );
};

export default Improvement;
