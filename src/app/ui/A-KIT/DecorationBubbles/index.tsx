import React, { useMemo } from 'react';

type DecorationBubbleProps = {
  className?: string;
  position: {
    right?: string;
    top?: string;
    left?: string;
    bottom?: string;
  };
  size?: string;
  color?: string;
};

interface DecorationBubblesProps {
  className?: string;
}

const getPositionStyle = (position: DecorationBubbleProps['position']) => ({
  right: position.right,
  top: position.top,
  left: position.left,
  bottom: position.bottom,
});

const DecorationBubble = ({
  className = '',
  position,
  size = 'size-12',
  color = 'bg-rose-300',
}: DecorationBubbleProps) => {
  const positionStyle = useMemo(() => getPositionStyle(position), [position]);

  return (
    <div
      className={`absolute z-10 opacity-40 transition-opacity duration-300 group-hover:opacity-60 ${className}`}
      style={positionStyle}
    >
      <div className={`${size} rounded-full ${color}`}></div>
    </div>
  );
};

export const DecorationBubbles: React.FC<DecorationBubblesProps> = ({
  className = '',
}) => {
  return (
    <>
      <DecorationBubble
        position={{ right: '10%', top: '10%' }}
        size='size-12'
        color='bg-rose-300'
        className={className}
      />
      <DecorationBubble
        position={{ left: '15%', top: '10%' }}
        size='size-8'
        color='bg-pink-300'
        className={className}
      />
      <DecorationBubble
        position={{ right: '30%', top: '40%' }}
        size='size-6'
        color='bg-rose-200'
        className={className}
      />
      <DecorationBubble
        position={{ bottom: '40%', left: '30%' }}
        size='size-10'
        color='bg-pink-200'
        className={className}
      />
      <DecorationBubble
        position={{ bottom: '40%', right: '10%' }}
        size='size-4'
        color='bg-rose-100'
        className={className}
      />
      <DecorationBubble
        position={{ bottom: '20%', right: '1/2' }}
        size='size-8'
        color='bg-rose-100'
        className={className}
      />
      <DecorationBubble
        position={{ bottom: '30%', left: '10%' }}
        size='size-8'
        color='bg-pink-100'
        className={className}
      />
    </>
  );
};
