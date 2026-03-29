import { EditableText } from '../components/EditableText';
import { EditableImage } from '../components/EditableImage';
import { EditableList } from '../components/EditableList';
import { EditableListItem, EditableListContainer } from '../components/EditableListItem';

// Default services data
const defaultServices = [
  {
    id: '1',
    title: 'Video Production',
    description: 'Professional video production services for all your creative needs',
    icon: '🎬',
  },
  {
    id: '2',
    title: 'Creative Direction',
    description: 'Strategic creative direction to bring your vision to life',
    icon: '🎨',
  },
  {
    id: '3',
    title: 'Post-Production',
    description: 'Expert editing and post-production to perfect your content',
    icon: '✂️',
  },
  {
    id: '4',
    title: 'Motion Graphics',
    description: 'Dynamic motion graphics and visual effects',
    icon: '⚡',
  },
];

export function ServicesPageCRUD() {
  // Function to create a new service item
  const createNewService = () => ({
    id: Date.now().toString(),
    title: 'New Service',
    description: 'Service description here',
    icon: '✨',
  });

  return (
    <div className="min-h-screen bg-black pt-[100px] pb-[150px]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <EditableText
            id="services-title"
            value="Our Services"
            as="h1"
            className="mb-4 text-6xl font-bold text-white"
          />
          <EditableText
            id="services-subtitle"
            value="Comprehensive video production solutions"
            as="p"
            className="text-xl text-gray-400"
          />
        </div>

        {/* Editable Services Grid */}
        <EditableListContainer>
          <EditableList
            id="services-list"
            items={defaultServices}
            createNewItem={createNewService}
            addButtonLabel="+ Add New Service"
            emptyMessage="No services yet. Click + to add your first service."
            gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            renderItem={(service, index) => (
              <EditableListItem
                key={service.id}
                listId="services-list"
                index={index}
                id={service.id}
                className="group"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:to-white/5">
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 text-4xl">
                    <EditableText
                      id={`service-${service.id}-icon`}
                      value={service.icon}
                      as="span"
                      placeholder="+"
                    />
                  </div>

                  {/* Title */}
                  <EditableText
                    id={`service-${service.id}-title`}
                    value={service.title}
                    as="h3"
                    className="mb-3 text-2xl font-bold text-white"
                  />

                  {/* Description */}
                  <EditableText
                    id={`service-${service.id}-description`}
                    value={service.description}
                    as="p"
                    className="text-gray-400"
                    multiline
                  />
                </div>
              </EditableListItem>
            )}
          />
        </EditableListContainer>

        {/* Help Text */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">
            💡 Enable edit mode to add, delete, or reorder services
          </p>
        </div>
      </div>
    </div>
  );
}
