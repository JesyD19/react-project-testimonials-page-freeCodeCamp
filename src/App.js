import './App.css';
import Testimonial from './components/Testimonial';
import { data } from "./data/dataTestimonials";

const App = () => {
  const testimonials = data.map(testimonial => <Testimonial key={testimonial.id} {...testimonial} />);
  return (
    <div className="container">
      <div>
        <div className='mx-auto'>
          <h1 className="text-center">Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        </div>
        {testimonials}
      </div>
    </div>
  );
} 

export default App;


