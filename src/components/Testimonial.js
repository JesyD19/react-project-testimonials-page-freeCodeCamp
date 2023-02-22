import "../stylesheets/Testimonial.css";

const Testimonial = ({ image, name, country, position, company, testimonial }) => {
    return (
        <div className="container testimonial-container">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <img className="img-fluid mx-auto d-block" src={require(`../images/${image}-testimonial.png`)} alt={image} />
                </div>
                <div className="col-12 col-lg-8 text-center testimonial-text-container">
                    <p className="testimonial-name"><strong>{name}</strong> en {country}</p>
                    <p className="testimonial-position">{position} en <strong>{company}</strong></p>
                    <p className="text-testimonial">{testimonial}</p>
                </div>   
            </div> 
        </div>  
    );
}

export default Testimonial;
