import './Suggestion.css'
export default function Suggestions() {
  return (
    <form className='suggestions'>
      <label>
        Patient:
        <input
          type='text'
          />
      </label>
      <br />
      <label>
        Specialist:
        <input
          type='text'
        />
      </label>

    </form>
  )
}