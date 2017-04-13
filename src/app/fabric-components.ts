// ------------------------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
// ------------------------------------------------------------------------------

declare let fabric:any;
export function initFabricComponents() {
    var PivotElements = document.querySelectorAll(".ms-Pivot");
    for(var i = 0; i < PivotElements.length; i++) {
        new fabric['Pivot'](PivotElements[i]);
    }
    if ('Spinner' in fabric) {
        var elements = document.querySelectorAll('.ms-Spinner');
        var i = elements.length;
        var component;
        while(i--) {
            component = new fabric['Spinner'](elements[i]);
        }
    }
    
    var DialogElements = document.querySelectorAll(".ms-Dialog");
    var DialogComponents = [];
    for (var i = 0; i < DialogElements.length; i++) {
        (function(){
            DialogComponents[i] = new fabric['Dialog'](DialogElements[i]);
        }());
    }
    setTimeout(() => {
        var PanelExampleButton = document.querySelector("#show-full-history");
        var PanelExamplePanel = document.querySelector("#history-panel");
        PanelExampleButton.addEventListener("click", (i) => {
            new fabric['Panel'](PanelExamplePanel);
            (document.querySelector("#history-panel tbody tr:first-child") as any).focus();
            $(document).keyup(function(e) {
                if (e.keyCode === 27)  // esc
                    closeHistoryPanel();
            });
        });

        let closeHistoryPanel = () => {
            (document.querySelector("#history-panel .ms-Panel-closeButton") as any).click()
        };

    }, 0);
    var TableElements = document.querySelectorAll(".ms-Table");
    for(var i = 0; i < TableElements.length; i++) {
        new fabric['Table'](TableElements[i]);
    }
}