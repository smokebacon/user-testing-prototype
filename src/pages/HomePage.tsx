export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Welcome to the user test
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-prose">
          Follow the tasks below and share your thoughts as you go. There are no right or wrong answers.
        </p>
        <button className="mt-5 w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 active:scale-95 transition-all">
          Start session
        </button>
      </section>

      {/* Task list */}
      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Tasks
        </h2>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-start gap-4 rounded-xl bg-white border border-gray-200 p-4 sm:p-5"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600">
                {task.id}
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">{task.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{task.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Feedback */}
      <section className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Leave feedback</h2>
        <textarea
          rows={4}
          placeholder="What did you notice? What was confusing or easy?"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none"
        />
        <button className="mt-3 w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all">
          Submit feedback
        </button>
      </section>
    </div>
  )
}

const tasks = [
  {
    id: 1,
    title: 'Task one',
    description: 'Describe the first thing you want the participant to do.',
  },
  {
    id: 2,
    title: 'Task two',
    description: 'Describe the second task here.',
  },
  {
    id: 3,
    title: 'Task three',
    description: 'Add as many tasks as you need.',
  },
]
