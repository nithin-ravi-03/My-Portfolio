export default function SectionTitle({ title, subtitle }) {
    return (
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">{subtitle}</p>
      </div>
    )
  }