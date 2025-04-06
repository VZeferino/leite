interface MenuItem {
  name: string;
  description?: string;
  note?: string;
}

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export function MenuSection({ title, subtitle, items }: MenuSectionProps) {
  return (
    <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
      <div>
        <h4 className="text-xl font-bold text-[#ff0000] mb-2">{title}</h4>
        {subtitle && (
          <p className="text-gray-400 text-sm">{subtitle}</p>
        )}
      </div>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2" data-aos="fade-up" data-aos-delay={150 + (index * 50)}>
            <span className="text-[#ff0000]">•</span>
            <div>
              <span className="font-medium">{item.name}</span>
              {item.description && (
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              )}
              {item.note && (
                <p className="text-gray-400 text-sm mt-1 italic">{item.note}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 