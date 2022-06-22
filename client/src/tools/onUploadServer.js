import axios from 'axios'

export const onUploadServer = async (condition, event, file, fileName, setFileDoesNotFit, fileDoesNotFit, setFile, setFileIsUploaded) => {
    try {
        if (condition) {
          const file = event.target.files[0]
          const formData = new FormData();
          formData.append("file", file);
    
          await axios.post(`http://localhost:5000/api/${fileName}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          
          setFileDoesNotFit(false)
          setFileIsUploaded(true)
          return
        }
        if (fileDoesNotFit && file)
          alert("Your file does not fit")

        setFileDoesNotFit(true)
        setFile(null)
        
      } catch (e) {
        if (e.name === "TypeError")
          return
        console.log(e.message)
      }
}