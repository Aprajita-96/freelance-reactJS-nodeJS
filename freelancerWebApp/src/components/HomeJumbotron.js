
export default function HomeJumbotron(){
    return (

        <>
          <div class="jumbotron jumbotron-dark">
            <div className="container">
              <div class="row">
                <div class="col-lg-5">
                  <h2>Hire expert freelancers for any job, online</h2>
                  <h4>
                    Millions of small businesses use Freelancer to turn their ideas
                    into reality.
                  </h4>
                  <p class="lead">We make Things Happen!</p>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search for Projects"
                      name="search"
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="button">
                        Search
                      </button>
                    </span>
                  </div>
                  <br />
                </div>
                <div class="col-lg-6">
                  <img class="img-responsive" src="img1.png" />
                </div>
              </div>
            </div>
          </div>
        </>
    );
}