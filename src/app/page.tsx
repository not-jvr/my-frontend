import ButtonRedirect from "./components/shared/button_redirect";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        <ButtonRedirect name="n°1" path="/01" />
        <ButtonRedirect name="n°2" path="/02" />
        <ButtonRedirect name="n°3" path="/03" />
        <ButtonRedirect name="n°4" path="/04" />
        <ButtonRedirect name="n°5" path="/05" />
        <ButtonRedirect name="n°6" path="/06" />
        <ButtonRedirect name="n°7" path="/07" />
        <ButtonRedirect name="n°8" path="/08" />
        <ButtonRedirect name="n°9" path="/09" />
        <ButtonRedirect name="n°10" path="/10" />
        <ButtonRedirect name="n°11" path="/11" />
        <ButtonRedirect name="n°12" path="/12" />
      </div>
    </div>
  );
}