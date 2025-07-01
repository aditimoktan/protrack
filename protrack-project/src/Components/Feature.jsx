import taskIcon from "../assets/task-card.jpg";
import progressIcon from "../assets/progress-card.jpg";
import organizeIcon from "../assets/organize-card.jpg";
import habitIcon from "../assets/health-card.jpg";
import fitnessIcon from "../assets/fitness-card.jpg";
import groupIcon from "../assets/group-card.jpg";




function Feature() {
  return (
    <div className="bg-violet-50 py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-[300px] max-w-[1300px] mx-auto">
        <div className="bg-white p-6 rounded-lg shadow text-center pb-2">
          <img src={taskIcon} alt="Task" className="h-50 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Task Management</h3>
          <p className="text-sm text-gray-600">
            Add, edit, and manage your daily tasks easily.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center pb-2">
          <img
            src={progressIcon}
            alt="Progress"
            className="h-50 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Track Progress</h3>
          <p className="text-sm text-gray-600">
            Keep an eye on your deadlines and progress.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center pb-2">
          <img
            src={organizeIcon}
            alt="Organize"
            className="h-50 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Stay Organized</h3>
          <p className="text-sm text-gray-600">
            Group your tasks by project and category.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center pb-2">
          <img
            src={habitIcon}
            alt="Progress"
            className="h-50 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Habit & Health Tracker</h3>
          <p className="text-sm text-gray-600">
            Track daily habits like drinking water, sleeping, or taking breaks.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center pb-2">
          <img
            src={fitnessIcon}
            alt="Progress"
            className="h-50 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Fitness Goals & Progress</h3>
          <p className="text-sm text-gray-600">
            Set fitness goals and achieve them.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center pb-2">
          <img
            src={groupIcon}
            alt="Progress"
            className="h-50 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Group Projects</h3>
          <p className="text-sm text-gray-600">
            Share a project with classmates or team members.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
