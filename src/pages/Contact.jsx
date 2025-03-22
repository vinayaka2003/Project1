export const Contact = () => {

    const handleFormSubmit = (formData) => {
        console.log(formData.entries());
    };

    return <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

    <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
        <input 
        type="text" 
        required 
         className="searchFilter"
        autoComplete="false" 
        placeholder="Enter your name" 
        name="username"
        />

        <input 
        type="email" 
        className="form-control searchFilter" 
        placeholder="Enter you email" 
        name="email" 
        required 
        autoComplete="off"
        />

        <textarea 
        className="form-control searchFilter" 
        rows="10" 
        placeholder="Enter your message" 
        name="message" 
        required autoComplete="off">
        </textarea>
        
        <button type="submit" value="send"> Send </button>
        </form>
    </div>
    </section>
};