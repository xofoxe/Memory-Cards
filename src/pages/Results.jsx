import Button from "../components/Button";

export default function ResultsPage({ result, onRestart, onNext}) {
  return (
       <> 
        <p className="text-sm mb-1">Час: {result.time}s</p>
        <p className="text-sm mb-4">Ходи: {result.moves}</p>
        <div className="flex gap-2 justify-center">
          <Button onClick={onRestart}>Грати ще раз</Button>
          <Button onClick={onNext}>Наступна гра</Button>
        </div>
    </> 
  );
}
