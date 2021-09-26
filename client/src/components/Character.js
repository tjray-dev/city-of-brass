const Character = () => {
  return (
    <>
      <div>
        <form>
          <input type="text"
            name="character_name"
            placeholder="Character Name"
          />
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
    </>
  )
}

export default Character