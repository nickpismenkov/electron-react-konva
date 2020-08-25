import React from 'react';
import { Stage, Layer, Text, Rect, Circle } from 'react-konva';

type CanvasType = {
  data: any;
};

const Canvas: React.FC<CanvasType> = ({ data }) => {
  return (
    <Stage width={500} height={500} style={{ border: '2px solid black' }}>
      <Layer>
        {data === null ? (
          <Text
            text="No file selected"
            width={500}
            height={500}
            align="center"
            verticalAlign="middle"
            fill="green"
            fontSize={50}
          />
        ) : data.message ? (
          <Text
            text={data.message}
            width={500}
            height={500}
            align="center"
            verticalAlign="middle"
            fill="red"
            fontSize={50}
          />
        ) : (
          data.objs.map((item: any) =>
            item.type === 'rect' ? (
              <Rect
                x={item.x}
                y={item.y}
                width={item.width}
                height={item.height}
                fill={item.fill}
              />
            ) : (
              item.type === 'circle' && (
                <Circle
                  x={item.x}
                  y={item.y}
                  radius={item.radius}
                  fill={item.fill}
                />
              )
            )
          )
        )}
      </Layer>
    </Stage>
  );
};

export default Canvas;
