import "./testimonials.css"
import testimonials3 from "../../assets/images/testimonial3.jpg"
import testimonials2 from "../../assets/images/testimonial2.jpg"
import testimonial1 from "../../assets/images/testimonial1.jpg"






const Testimonials = () => {
  return (
    <div className="testimonials-container">
        <h3>بعض الاراء الناس </h3>

        <div className="testimonials-wrapper">

            <div className="testimonial-card" >
               <div className="testimonial-image">
                <img src={testimonials3} alt="testimonial" />
                </div>

                
                <div className="testimonial-details">
                    <h6>سفيان فويل , 35</h6>
                    <p>"كانت لدي تجربة رائعة في هذه العيادة كان الاطباء على دراية و مهتمين"</p>
                </div>

            </div>

            <div className="testimonial-card">
<div className="testimonial-image">
                <img src={testimonials2} alt="testimonial" />
                </div>
              
                <div className="testimonial-details">
                    <h6>مزغيش سمرة, 27</h6>
                    <p>"وفرت العيادة جوا  مريحا و ترحيبيا ."</p>
                </div>

            </div>

            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial1} alt="testimonial" />
                </div>

              
                <div className="testimonial-details">
                    <h6>عنقر يحي, 30</h6>
                    <p>"كانت العلاجات التي تلقيناها في هذه العيادة فعالة ."</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Testimonials