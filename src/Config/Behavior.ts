import IBehavior from './Interfaces/IBehavior';

class Behavior implements IBehavior {
    public showPlaceholderWhenOpen: boolean = false;
    public openOnFocus:             boolean = false;
    public closeOnSelect:           boolean = false;
    public useNativeUiOnMobile:     boolean = true;
    public loop:                    boolean = false;
    public clampMaxVisibleOptions:  boolean = true;
    public reactToUpdates:          boolean = false;
    public maxVisibleOptions:       number  = 15;

    constructor() {
        Object.seal(this);
    }
}

export default Behavior;