import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Facere natus, quibusdam iste unde consequatur nemo maxime, 
        totam, inventore optio impedit sequi a minus libero reprehenderit voluptas 
        quaerat accusantium nisi tenetur.</p>
    </div>
  )
}
