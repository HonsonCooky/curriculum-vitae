export default function StackOverflowIcon(params: {
  className?: React.ComponentProps<"div">["className"];
}) {
  return (
    <svg
      viewBox="0 0 169.61 200"
      xmlns="http://www.w3.org/2000/svg"
      className={params.className}
    >
      <path d="M 140.44 178.38 V 129.73 H 162.05 V 200 H 0 V 129.73 H 21.61 V 178.38 Z" />
      <path
        d="
          M 124.24 140.54 
          L 128.56 124.32 
          L 41.59 106.49 
          L 37.81 124.32 
          Z 
          M 49.7 82.16 
          L 130.72 120 
          L 138.28 103.78 
          L 57.26 65.95 
          Z 
          M 72.38 42.16 
          L 140.44 99.46 
          L 151.79 85.95 
          L 83.19 28.65 
          L 71.84 42.16 
          Z 
          M 116.14 0 
          L 101.55 10.81 
          L 155.03 82.7 
          L 169.61 71.89 
          Z 
          M 37.81 162.16 
          H 124.24 
          V 145.95 
          H 37.81 
          Z"
      />
    </svg>
  );
}
