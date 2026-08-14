import { useId, useState, type KeyboardEvent } from 'react';

interface AccordionItemProps {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <div className='border-b border-warm-beige last:border-b-0'>
      <h3>
        <button
          id={buttonId}
          type='button'
          className='flex items-center justify-between w-full gap-4 py-4 text-base font-semibold text-left min-h-11 text-dark-chocolate hover:text-terra-cotta'
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
        >
          {question}
          <span
            className='flex items-center justify-center w-6 h-6 text-sm font-bold rounded-full shrink-0 bg-cappuccino text-dark-chocolate'
            aria-hidden='true'
          >
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role='region'
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className='pb-4'
      >
        <p className='text-sm leading-relaxed text-dark-chocolate'>{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  readonly items: readonly {
    readonly id: string;
    readonly question: string;
    readonly answer: string;
  }[];
}

export function Accordion({ items }: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className='px-6 border-2 rounded-2xl border-warm-beige bg-surface'>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={`${baseId}-${item.id}`}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId((current) => (current === item.id ? null : item.id))
          }
        />
      ))}
    </div>
  );
}
