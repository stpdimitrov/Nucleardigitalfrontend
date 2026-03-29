import { EditableGridItem } from '../src/cms/EditableGridItem';

/**
 * Example usage of EditableGridItem for grid/matrix layouts
 * 
 * This component demonstrates how to create editable grid items
 * where users can configure:
 * - Column span (how many columns the item takes up)
 * - Variant/filter selection
 * - Direction (horizontal/vertical)
 */

interface ProjectCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
}

function ProjectCard({ title, category, date, image }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-300">{category}</span>
          <span className="text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
}

export function GridExample() {
  const projects = [
    {
      id: 'project-1',
      title: 'Pulse Drive',
      category: 'Creative Direction',
      date: 'Apr 10, 2025',
      image: 'https://images.unsplash.com/photo-1542282910-9778f4c94488?w=800',
      defaultSpan: 1,
    },
    {
      id: 'project-2',
      title: 'Echo Frames',
      category: 'Video Production',
      date: 'Aug 4, 2024',
      image: 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=800',
      defaultSpan: 2,
    },
    {
      id: 'project-3',
      title: 'Waveline',
      category: 'Post-Production & Editing',
      date: 'Dec 19, 2023',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
      defaultSpan: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1929] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400">Click on items in edit mode to configure grid layout</p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <EditableGridItem
              key={project.id}
              contentKey={`grid.${project.id}`}
              defaultSpan={project.defaultSpan}
              maxSpan={3}
              variants={['Creative Direction', 'Video Production', 'Post-Production & Editing']}
              className="min-h-[300px]"
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                date={project.date}
                image={project.image}
              />
            </EditableGridItem>
          ))}
        </div>
      </div>
    </div>
  );
}
