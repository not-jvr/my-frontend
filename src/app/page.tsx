import ButtonRedirect from "./components/shared/button_redirect";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        <ButtonRedirect name="n°1" path="/01" />
        <ButtonRedirect name="n°2" path="/02" />
        <ButtonRedirect name="n°3" path="/03" />
      </div>
    </div>
  );
}