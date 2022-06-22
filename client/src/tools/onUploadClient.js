export const onUploadClient = async (e, set) => {
  if (
    e.target.files.length > 1 ||
    !e.target.files.length ||
    !e.target.files[0].type.match("json")
  ) return 

  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = e => {
    let data = e.target.result
    data = JSON.parse(data)
    set(data)
  }

  reader.readAsText(file)
}