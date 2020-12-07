import * as React from 'react';
import {useBoolean, useId} from '@uifabric/react-hooks';
import {DefaultButton, Modal,} from 'office-ui-fabric-react';


export const ModalBasic: React.FunctionComponent = () => {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    // const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);

    // Use useId() to ensure that the IDs are unique on the page.
    // (It's also okay to use plain strings and manually ensure uniqueness.)
    const titleId = useId('title');

    return (
        <div>
            <DefaultButton onClick={showModal} text="Open Modal" />
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
            >
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit
                        amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor
                        sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut
                        turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh,
                        ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros.
                        Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante.
                        Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend
                        efficitur.
                    </p>
                </div>
            </Modal>
        </div>
    );
};
