import { ReactNode } from 'react';
import { UserInfo } from '../../../core/user';

export interface SidebarInfoProps {
	children?: ReactNode;
    classNames: string[];
    info: UserInfo | undefined;
}
