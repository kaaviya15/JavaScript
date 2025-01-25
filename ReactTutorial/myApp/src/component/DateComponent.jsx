

const DateComponent = () => {
    const date=new Date();
  return (
    <div>
      <h3>CurrentDate</h3>
      {date.toString()}
    </div>
  )
}

export default DateComponent
