interface InfoAboutCountLimitProps {
  currentCount: number;
  maxCountValue: number;
}

function InfoAboutCountLimit({ currentCount, maxCountValue }: InfoAboutCountLimitProps) {
  if (currentCount !== maxCountValue) {
    return null;
  }
  return (
    <p>
      You reached the countdown limit
    </p>
  )
}

export default InfoAboutCountLimit;