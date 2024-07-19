interface Props {
  text: string;
}

function NoMovieFound({ text }: Props) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-red-600">
      <h1 className="md:text-4xl text-2xl">{text}</h1>
      <p className="md:text-lg text-sm">
        Unfortunately, there seems to be an issue...
      </p>
    </div>
  );
}

export default NoMovieFound;
