const GenderCheckbox = (onCheckboxChange, selectedGender) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`cursor-pointer label gap-2 ${selectedGender === "male"? "selected" : ""}`}>
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox checkbox-primary"
                checked={selectedGender === "male"} 
                onChange={() => onCheckboxChange("male")}  />
            </label>    
        </div>
        <div className="form-control">
            <label className="cursor-pointer label gap-2">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox checkbox-primary"
                checked={selectedGender === "female"} 
                onChange={() => onCheckboxChange("female")} />
            </label>    
        </div>
    </div>
  )
}

export default GenderCheckbox;




