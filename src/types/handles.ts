import { XYPosition, Position, Dimensions } from './utils';
import { OnConnect, Connection } from './general';

export type HandleType = 'source' | 'target';

export interface HandleElement extends XYPosition, Dimensions {
  id?: string | null;
  position: Position;
  color?: string | null;
}

export interface StartHandle {
  nodeId: string;
  type: HandleType;
  handleId?: string | null;
}

export interface HandleProps {
  type: HandleType;
  position: Position;
  maxConnections?: Number;
  color?: string;
  isConnectable?: boolean;
  onConnect?: OnConnect;
  isValidConnection?: (connection: Connection) => boolean;
  id?: string;
}
