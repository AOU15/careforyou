import './Suggestion.css'


export default function Suggestion() {
  return (
    <div>
    
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
      <br />
      <label>
        Service:
        <input
          type='text'
        />
      </label>
      <button className='submitbutton'>Submit Suggestion</button>
      </form>
      </div>
  )
}