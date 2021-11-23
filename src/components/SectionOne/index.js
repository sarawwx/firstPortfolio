import './style.scss'

const SectionOne = () => {
    return (
        <>
            <section class="py-5 text-center container-fluid" id="banner" >
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto bannermain-holder">
                        <h3 class="fw-light bmvindo-text">welcome to my portfolio!</h3>
                        <p class="lead">ignore the mistakes, i'm still learning</p>
                        <a href="#ref-1"><img src="images/arrow.png" class="arrow-img" alt="seta"></img></a>
                    </div>
                </div>
            </section>
            <section class="py-5 section-one" id="ref-1">
                <div class="container">
                    <div class="container-fluid d-flex flex-column section-me">
                        <h2>about me</h2>
                        <div class="row one-container">
                            <div class="col row me-container">
                                <img class="me" src="images/me.jpg"></img>
                                <div class="desc-holder col-lg-8">
                                    <p>hello, i'm 19 years old... i finished high school last year, and started immersing myself in this new world of programming recently. if you have any advice to offer me, please say  -thanks</p>
                                </div>
                                <div class="col-lg-2 contato-holder">
                                    <a href="https://github.com/sarawwx"><img src="images/github.png" class="link-icon"></img></a>
                                    <a href="https://www.instagram.com/llssaax/"><img src="images/instagram.png" class="link-icon"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionOne;