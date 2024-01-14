const QuestionAnswer = () => {
  return (
    <>
      <section className="my-8">
        <h1 className="text-[#703e78] font-bold text-2xl text-center my-8">
          Explore FAQs
        </h1>
        <div className="text-[#703e78]">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Is the course self-paced or instructor-led?
              </div>
              <div className="collapse-content">
                <p>
                  The course is instructor-led, providing a structured learning
                  experience with guidance and support.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What kind of support is available for students during the
                course?
              </div>
              <div className="collapse-content">
                <p>
                  Students have access to a dedicated support team and regular
                  Q&A sessions with instructors to address any queries or
                  concerns.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Are there opportunities for interactive learning and group
                activities?{" "}
              </div>
              <div className="collapse-content">
                <p>
                  Yes, the course includes interactive learning elements and
                  group activities to enhance engagement and collaboration among
                  students.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionAnswer;
