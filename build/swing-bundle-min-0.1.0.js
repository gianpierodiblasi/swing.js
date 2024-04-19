class Color{red=0;green=0;blue=0;constructor(e,t,s){this.red=e,this.green=t,this.blue=s}}class Dimension{width=0;height=0;constructor(e,t){this.width=e,this.height=t}}class ActionEvent{}class ActionListener{actionPerformed(e){}}class GridBagConstraints{static RELATIVE=-1;static REMAINDER=0;static NONE=0;static BOTH=1;static HORIZONTAL=2;static VERTICAL=3;static CENTER=10;static NORTH=11;static NORTHEAST=12;static EAST=13;static SOUTHEAST=14;static SOUTH=15;static SOUTHWEST=16;static WEST=17;static NORTHWEST=18;static PAGE_START=19;static PAGE_END=20;static LINE_START=21;static LINE_END=22;static FIRST_LINE_START=23;static FIRST_LINE_END=24;static LAST_LINE_START=25;static LAST_LINE_END=26;static BASELINE=256;static BASELINE_LEADING=512;static BASELINE_TRAILING=768;static ABOVE_BASELINE=1024;static ABOVE_BASELINE_LEADING=1280;static ABOVE_BASELINE_TRAILING=1536;static BELOW_BASELINE=1792;static BELOW_BASELINE_LEADING=2048;static BELOW_BASELINE_TRAILING=2304;gridx=0;gridy=0;gridwidth=0;gridheight=0;weightx=0;weighty=0;anchor=0;fill=0;insets=null;ipadx=0;ipady=0;constructor(){this.gridx=GridBagConstraints.RELATIVE,this.gridy=GridBagConstraints.RELATIVE,this.gridwidth=1,this.gridheight=1,this.weightx=0,this.weighty=0,this.anchor=GridBagConstraints.CENTER,this.fill=GridBagConstraints.NONE,this.insets=new Insets(0,0,0,0),this.ipadx=0,this.ipady=0}get(e){switch(e){case"gridx":return this.gridx;case"gridy":return this.gridy;case"gridwidth":return this.gridwidth;case"gridheight":return this.gridheight;case"weightx":return this.weightx;case"weighty":return this.weighty;case"anchor":return this.anchor;case"fill":return this.fill;case"ipadx":return this.ipadx;case"ipady":return this.ipady;default:return 0}}}class Insets{top=0;left=0;bottom=0;right=0;constructor(e,t,s,i){this.top=e,this.left=t,this.bottom=s,this.right=i}}class LayoutManager{setPanel(e){}resetPanel(e){}addInPanel(e,t,s){}}class BorderLayout extends LayoutManager{static NORTH="North";static SOUTH="South";static EAST="East";static WEST="West";static CENTER="Center";static BEFORE_FIRST_LINE=BorderLayout.NORTH;static AFTER_LAST_LINE=BorderLayout.SOUTH;static BEFORE_LINE_BEGINS=BorderLayout.WEST;static AFTER_LINE_ENDS=BorderLayout.EAST;static PAGE_START=BorderLayout.BEFORE_FIRST_LINE;static PAGE_END=BorderLayout.AFTER_LAST_LINE;static LINE_START=BorderLayout.BEFORE_LINE_BEGINS;static LINE_END=BorderLayout.AFTER_LINE_ENDS;hGap=0;vGap=0;constructor(e,t){super(),this.hGap=void 0===e?0:e,this.vGap=void 0===t?0:t}setPanel(e){let t=document.createElement("div");t.classList.add("borderlayout-middle"),e.element.appendChild(t),e.element.classList.add("borderlayout")}resetPanel(e){e.element.textContent="",e.element.classList.remove("borderlayout")}addInPanel(e,t,s){switch(t.element.classList.add("borderlayout-"+s.toLowerCase()),s){case BorderLayout.NORTH:e.element.appendChild(t.element),t.element.style.marginBottom=this.vGap+"px";break;case BorderLayout.SOUTH:e.element.appendChild(t.element),t.element.style.marginTop=this.vGap+"px";break;case BorderLayout.WEST:e.element.querySelector(".borderlayout-middle").appendChild(t.element),t.element.style.marginRight=this.hGap+"px";break;case BorderLayout.CENTER:e.element.querySelector(".borderlayout-middle").appendChild(t.element);break;case BorderLayout.EAST:e.element.querySelector(".borderlayout-middle").appendChild(t.element),t.element.style.marginLeft=this.hGap+"px"}}}class BoxLayout extends LayoutManager{static X_AXIS=0;static Y_AXIS=1;static LINE_AXIS=2;static PAGE_AXIS=3;axis=0;constructor(e,t){super(),this.axis=t}setPanel(e){switch(e.element.classList.add("boxlayout"),this.axis){case BoxLayout.LINE_AXIS:case BoxLayout.X_AXIS:e.element.style.flexDirection="row",e.element.style.alignItems="center";break;case BoxLayout.PAGE_AXIS:case BoxLayout.Y_AXIS:e.element.style.flexDirection="column",e.element.style.alignItems="flex-start"}}resetPanel(e){e.element.textContent="",e.element.classList.remove("boxlayout"),e.element.style.flexDirection="",e.element.style.alignItems=""}addInPanel(e,t,s){e.element.appendChild(t.element)}}class CardLayout extends LayoutManager{hGap=0;vGap=0;constructor(e,t){super(),this.hGap=void 0===e?0:e,this.vGap=void 0===t?0:t}setPanel(e){e.element.classList.add("cardlayout")}resetPanel(e){e.element.textContent="",e.element.classList.remove("cardlayout")}addInPanel(e,t,s){e.element.appendChild(t.element),t.element.setAttribute("card",s),t.element.setAttribute("old-display",t.element.style.display),e.element.childElementCount>1&&(t.element.style.display="none"),t.element.style.flexGrow="1",t.element.style.marginLeft=this.hGap+"px",t.element.style.marginRight=this.hGap+"px",t.element.style.marginTop=this.vGap+"px",t.element.style.marginBottom=this.vGap+"px"}show(e,t){for(let s=0;s<e.element.childElementCount;s++)e.element.childNodes[s].style.display="none";let i=e.element.querySelector('[card="'+t+'"]');i.style.display=i.getAttribute("old-display")}}class FlowLayout extends LayoutManager{static LEFT=0;static CENTER=1;static RIGHT=2;static LEADING=3;static TRAILING=4;align=0;hGap=0;vGap=0;constructor(e,t,s){super(),this.align=e,this.hGap=void 0===t?5:t,this.vGap=void 0===s?5:s}setPanel(e){switch(e.element.classList.add("flowlayout"),this.align){case FlowLayout.LEFT:case FlowLayout.LEADING:e.element.style.justifyContent="flex-start";break;case FlowLayout.CENTER:e.element.style.justifyContent="center";break;case FlowLayout.RIGHT:case FlowLayout.TRAILING:e.element.style.justifyContent="flex-end"}}resetPanel(e){e.element.textContent="",e.element.classList.remove("flowlayout"),e.element.style.justifyContent=""}addInPanel(e,t,s){e.element.appendChild(t.element),t.element.style.marginLeft=this.hGap+"px",t.element.style.marginRight=this.hGap+"px",t.element.style.marginTop=this.vGap+"px",t.element.style.marginBottom=this.vGap+"px"}}class GridBagLayout extends LayoutManager{columnWidths=null;rowHeights=null;gridTemplateAreas=[];constraintsArray=[];position=1;constructor(){super()}setPanel(e){e.element.classList.add("gridbaglayout")}resetPanel(e){e.element.textContent="",e.element.classList.remove("gridbaglayout"),e.element.style.removeProperty("grid-template"),e.element.style.removeProperty("grid-template-areas"),e.element.style.removeProperty("grid-template-rows"),e.element.style.removeProperty("grid-template-columns")}addInPanel(e,t,s){this.constraintsArray.push(s),e.element.appendChild(t.element),e.element.style.setProperty("grid-template-areas",this.setGridTemplateAreas(s)),e.element.style.setProperty("grid-template-rows",this.getWeight(this.gridTemplateAreas,"gridy","gridheight","weighty",this.rowHeights)),e.element.style.setProperty("grid-template-columns",this.gridTemplateAreas.length>0?this.getWeight(this.gridTemplateAreas[0],"gridx","gridwidth","weightx",this.columnWidths):""),this.setComponent(t,s)}setGridTemplateAreas(e){for(let t=this.gridTemplateAreas.length;t<e.gridy+e.gridheight;t++)this.gridTemplateAreas.push([]);let s=0;for(let i=0;i<this.gridTemplateAreas.length;i++)s=Math.max(s,this.gridTemplateAreas[i].length);for(let l=0;l<this.gridTemplateAreas.length;l++)for(let n=this.gridTemplateAreas[l].length;n<Math.max(s,e.gridx+e.gridwidth);n++)this.gridTemplateAreas[l].push(".");for(let a=e.gridy;a<e.gridy+e.gridheight;a++){let r=this.gridTemplateAreas[a];for(let o=e.gridx;o<e.gridx+e.gridwidth;o++)r[o]="p"+this.position}let d="";for(let h=0;h<this.gridTemplateAreas.length;h++){let c="";for(let m=0;m<this.gridTemplateAreas[h].length;m++)c+=this.gridTemplateAreas[h][m]+" ";d+='"'+c+'"\n'}return d}getWeight(e,t,s,i,l){let n=[];for(let a=0;a<e.length;a++)n.push(0);for(let r=1;r<=e.length;r++){let o=r;this.constraintsArray.filter(e=>e.get(s)===o).forEach(e=>{let l=!1;for(let a=e.get(t);a<e.get(t)+e.get(s);a++)l|=n[a]>=e.get(i);l||(n[e.get(t)+e.get(s)-1]=e.get(i))})}let d="";for(let h=0;h<n.length;h++)l&&l[h]?d+=l[h]+"px ":d+=0===n[h]?"auto ":n[h]+"fr ";return d}setComponent(e,t){switch(e.element.style.setProperty("grid-area","p"+this.position),this.position++,t.anchor){case GridBagConstraints.CENTER:case GridBagConstraints.BASELINE:case GridBagConstraints.ABOVE_BASELINE:case GridBagConstraints.BELOW_BASELINE:e.element.style.setProperty("justify-self","center"),e.element.style.setProperty("align-self","center");break;case GridBagConstraints.NORTH:case GridBagConstraints.PAGE_START:e.element.style.setProperty("justify-self","center"),e.element.style.setProperty("align-self","start");break;case GridBagConstraints.NORTHEAST:case GridBagConstraints.FIRST_LINE_END:e.element.style.setProperty("justify-self","end"),e.element.style.setProperty("align-self","start");break;case GridBagConstraints.EAST:case GridBagConstraints.LINE_END:case GridBagConstraints.BASELINE_TRAILING:case GridBagConstraints.ABOVE_BASELINE_TRAILING:case GridBagConstraints.BELOW_BASELINE_TRAILING:e.element.style.setProperty("justify-self","end"),e.element.style.setProperty("align-self","center");break;case GridBagConstraints.SOUTHEAST:case GridBagConstraints.LAST_LINE_END:e.element.style.setProperty("justify-self","end"),e.element.style.setProperty("align-self","end");break;case GridBagConstraints.SOUTH:case GridBagConstraints.PAGE_END:e.element.style.setProperty("justify-self","center"),e.element.style.setProperty("align-self","end");break;case GridBagConstraints.SOUTHWEST:case GridBagConstraints.LAST_LINE_START:e.element.style.setProperty("justify-self","start"),e.element.style.setProperty("align-self","end");break;case GridBagConstraints.WEST:case GridBagConstraints.LINE_START:case GridBagConstraints.BASELINE_LEADING:case GridBagConstraints.ABOVE_BASELINE_LEADING:case GridBagConstraints.BELOW_BASELINE_LEADING:e.element.style.setProperty("justify-self","start"),e.element.style.setProperty("align-self","center");break;case GridBagConstraints.NORTHWEST:case GridBagConstraints.FIRST_LINE_START:e.element.style.setProperty("justify-self","start"),e.element.style.setProperty("align-self","start")}switch(t.fill){case GridBagConstraints.NONE:break;case GridBagConstraints.BOTH:e.element.style.setProperty("justify-self","stretch"),e.element.style.setProperty("align-self","stretch");break;case GridBagConstraints.HORIZONTAL:e.element.style.setProperty("justify-self","stretch");break;case GridBagConstraints.VERTICAL:e.element.style.setProperty("align-self","stretch")}}}class GridLayout extends LayoutManager{rows=0;cols=0;hGap=0;vGap=0;constructor(e,t,s,i){super(),this.rows=e,this.cols=t,this.hGap=void 0===s?0:s,this.vGap=void 0===i?0:i}setPanel(e){e.element.classList.add("gridlayout");let t="";for(let s=1;s<=this.rows;s++){let i="";for(let l=1;l<=this.cols;l++)i+="p"+((s-1)*this.cols+l)+" ";t+='"'+i+'" 1fr\n'}t+="/";for(let n=1;n<=this.cols;n++)t+=" 1fr";e.element.style.setProperty("grid-template",t),e.element.style.setProperty("row-gap",this.vGap+"px"),e.element.style.setProperty("column-gap",this.hGap+"px")}resetPanel(e){e.element.textContent="",e.element.classList.remove("gridlayout"),e.element.style.removeProperty("grid-template"),e.element.style.removeProperty("grid-template-areas"),e.element.style.removeProperty("row-gap"),e.element.style.removeProperty("column-gap")}addInPanel(e,t,s){e.element.appendChild(t.element),t.element.style.setProperty("grid-area","p"+e.element.childElementCount)}}class ButtonGroup{name="ButtonGroup_"+new Date().getTime()+"_"+parseInt(1e3*Math.random());count=0;add(e){e.element.querySelector("[type=radio]").setAttribute("name",this.name),this.count++}getButtonCount(){return this.count}}class ChangeEvent{}class ChangeListener{stateChanged(e){}}class JSComponent{element=null;setBackground(e){this.element.style.backgroundColor="rgb("+e.red+", "+e.green+", "+e.blue+")"}setID(e){this.element.id=e}getID(){return this.element.id}cssAddClass(e){this.element.classList.add(e)}cssRemoveClass(e){this.element.classList.remove(e)}cssToggleClass(e){this.element.classList.toggle(e)}cssClassList(){return this.element.classList}}class AbstractButton extends JSComponent{listeners=[];constructor(){super()}addActionListener(e){this.listeners.push(e)}onclick(){let e=new ActionEvent;return this.listeners.forEach(t=>{"function"==typeof t?t(e):t.actionPerformed(e)}),null}}class JSButton extends AbstractButton{constructor(){super(),this.element=document.createElement("button"),this.element.classList.add("jbutton"),this.element.onclick=e=>this.onclick(),LookAndFeel.CURRENT.styleJSButton(this)}setText(e){this.element.textContent=e}setEnabled(e){e?this.element.removeAttribute("disabled"):this.element.setAttribute("disabled","disabled")}}class JSCheckBox extends AbstractButton{checkbox=null;text=null;constructor(){super(),this.element=document.createElement("label"),this.element.classList.add("jcheckbox"),this.checkbox=document.createElement("input"),this.checkbox.setAttribute("type","checkbox"),this.checkbox.onchange=e=>this.onclick(),this.element.appendChild(this.checkbox),this.text=document.createTextNode(""),this.element.appendChild(this.text),LookAndFeel.CURRENT.styleJSCheckBox(this)}setSwitch(){this.checkbox.setAttribute("role","switch"),LookAndFeel.CURRENT.styleJSCheckBox(this)}setToggle(){this.checkbox.setAttribute("role","toggle"),LookAndFeel.CURRENT.styleJSCheckBox(this)}setText(e){this.text.textContent=e}setSelected(e){this.checkbox.checked=e}isSelected(){return this.checkbox.checked}setEnabled(e){e?this.checkbox.removeAttribute("disabled"):this.checkbox.setAttribute("disabled","disabled")}}class JSComboBox extends AbstractButton{static MODEL_AND_RENDERER="model-and-renderer";modelAndRenderer=null;constructor(){super(),this.element=document.createElement("select"),this.element.classList.add("jcombobox"),this.element.onchange=e=>this.onclick(),LookAndFeel.CURRENT.styleJSComboBox(this)}getSelectedItem(){return this.modelAndRenderer.getElementAt(this.element.selectedIndex)}setEnabled(e){e?this.element.removeAttribute("disabled"):this.element.setAttribute("disabled","disabled")}setModelAndRenderer(e){this.modelAndRenderer=e,this.modelAndRenderer.setComboBox(this)}getModelAndRenderer(){return this.modelAndRenderer}}class JSRadioButton extends AbstractButton{radiobutton=null;text=null;constructor(){super(),this.element=document.createElement("label"),this.element.classList.add("jradiobutton"),this.radiobutton=document.createElement("input"),this.radiobutton.setAttribute("type","radio"),this.radiobutton.onchange=e=>this.onclick(),this.element.appendChild(this.radiobutton),this.text=document.createTextNode(""),this.element.appendChild(this.text),LookAndFeel.CURRENT.styleJSRadioButton(this)}setSwitch(){this.radiobutton.setAttribute("role","switch"),LookAndFeel.CURRENT.styleJSRadioButton(this)}setToggle(){this.radiobutton.setAttribute("role","toggle"),LookAndFeel.CURRENT.styleJSRadioButton(this)}setText(e){this.text.textContent=e}getText(){return this.text.textContent}setSelected(e){this.radiobutton.checked=e}isSelected(){return this.radiobutton.checked}setEnabled(e){e?this.radiobutton.removeAttribute("disabled"):this.radiobutton.setAttribute("disabled","disabled")}}class JSToggleButton extends AbstractButton{togglebutton=null;text=null;constructor(){super(),this.element=document.createElement("label"),this.element.classList.add("jtogglebutton"),this.togglebutton=document.createElement("input"),this.togglebutton.setAttribute("type","checkbox"),this.togglebutton.onchange=e=>this.onclick(),this.togglebutton.setAttribute("role","toggle"),this.element.appendChild(this.togglebutton),this.text=document.createTextNode(""),this.element.appendChild(this.text),LookAndFeel.CURRENT.styleJSToggleButton(this)}setText(e){this.text.textContent=e}setSelected(e){this.togglebutton.checked=e}isSelected(){return this.togglebutton.checked}setEnabled(e){e?this.togglebutton.removeAttribute("disabled"):this.togglebutton.setAttribute("disabled","disabled")}}class Filler extends JSComponent{constructor(e,t,s){super(),this.element=document.createElement("span"),this.element.classList.add("jcomponent-box-filler"),this.element.style.minWidth=e.width+"px",this.element.style.minHeight=e.height+"px",this.element.style.width=t.width+"px",this.element.style.height=t.height+"px",this.element.style.maxWidth=s.width+"px",this.element.style.maxHeight=s.height+"px",0===e.width&&0===e.height&&0===t.width&&0===t.height&&(this.element.style.flexGrow="1")}}class JSFrame extends JSComponent{contentPane=new JSPanel;constructor(){super(),this.contentPane.element.classList.remove("jpanel"),this.contentPane.element.classList.add("jframe"),this.contentPane.setLayout(new BorderLayout(0,0)),this.element=document.querySelector("body"),this.element.textContent="",this.element.appendChild(this.contentPane.element)}setTitle(e){if(e){let t=document.querySelector("title");t||(t=document.createElement("title"),document.getElementsByTagName("head")[0].appendChild(t)),t.textContent=e}}getContentPane(){return this.contentPane}}class JSLabel extends JSComponent{constructor(){super(),this.element=document.createElement("label"),this.element.classList.add("jlabel"),LookAndFeel.CURRENT.styleJSLabel(this)}setText(e){this.element.textContent=e}}class JSPanel extends JSComponent{layoutManager=null;constructor(){super(),this.element=document.createElement("div"),this.element.classList.add("jpanel"),this.setLayout(new FlowLayout(FlowLayout.CENTER,5,5))}setLayout(e){this.layoutManager&&this.layoutManager.resetPanel(this),this.layoutManager=e,this.layoutManager.setPanel(this)}getLayout(){return this.layoutManager}add(e,t){this.layoutManager.addInPanel(this,e,t)}}class JSTabbedPane extends JSPanel{tabs=new JSPanel;content=new JSPanel;contentLayout=new CardLayout(0,0);tabsGroup=new ButtonGroup;constructor(){super(),this.setLayout(new BorderLayout(0,0)),this.tabs.setLayout(new FlowLayout(FlowLayout.LEFT,0,0)),this.add(this.tabs,BorderLayout.NORTH),this.content.setLayout(this.contentLayout),this.add(this.content,BorderLayout.CENTER),LookAndFeel.CURRENT.styleJSTabbedPane(this)}addTab(e,t){let s=new JSRadioButton;s.setText(e),s.setSelected(0===this.tabsGroup.getButtonCount()),s.addActionListener(t=>this.contentLayout.show(this.content,e)),this.tabs.add(s,null),this.tabsGroup.add(s),this.content.add(t,e),LookAndFeel.CURRENT.styleJSTabbedPane(this)}}class JSProgressBar extends JSComponent{static HORIZONTAL=0;static VERTICAL=1;min=0;max=100;value=0;indeterminate=!1;constructor(){super(),this.element=document.createElement("progress"),this.element.style.width="auto",this.element.setAttribute("max",""+this.max),this.element.setAttribute("value",""+this.value),this.element.classList.add("jprogressbar"),LookAndFeel.CURRENT.styleJSProgressBar(this)}setMaximum(e){this.max=e,this.setProgress()}setMinimum(e){this.min=e,this.setProgress()}setValue(e){this.value=e,this.setProgress()}setIndeterminate(e){this.indeterminate=e,this.setProgress()}setProgress(){this.element.setAttribute("max",""+(this.max-this.min)),this.element.setAttribute("value",""+(this.value-this.min)),this.indeterminate&&this.element.removeAttribute("value")}setOrientation(e){switch(this.element.classList.remove("jprogressbar-horizontal"),this.element.classList.remove("jprogressbar-vertical"),this.element.style.removeProperty("width"),this.element.style.removeProperty("height"),e){case JSProgressBar.HORIZONTAL:this.element.classList.add("jprogressbar-horizontal"),this.element.style.width="auto";break;case JSProgressBar.VERTICAL:this.element.classList.add("jprogressbar-vertical"),this.element.style.height="auto"}}}class JSSlider extends JSComponent{static HORIZONTAL=0;static VERTICAL=1;modelAndRenderer=null;orientation=0;majorTickSpacing=0;paintTicks=!1;paintLabels=!1;valueIsAdjusting=!1;listeners=[];slider=null;dataList=null;dataListID="DataList_"+new Date().getTime()+"_"+parseInt(1e3*Math.random());constructor(){super(),this.element=document.createElement("div"),this.element.classList.add("jslider"),this.element.classList.add("jslider-horizontal"),this.slider=document.createElement("input"),this.slider.setAttribute("type","range"),this.slider.setAttribute("list",this.dataListID),this.slider.oninput=e=>this.onchange(!0),this.slider.onchange=e=>this.onchange(!1),this.element.appendChild(this.slider),this.dataList=document.createElement("datalist"),this.dataList.id=this.dataListID,this.element.appendChild(this.dataList);let e=document.createElement("div");e.style.display="none",this.element.appendChild(e),LookAndFeel.CURRENT.styleJSSlider(this)}addChangeListener(e){this.listeners.push(e)}onchange(e){this.valueIsAdjusting=e;let t=new ChangeEvent;return this.listeners.forEach(e=>{"function"==typeof e?e(t):e.stateChanged(t)}),null}getValueIsAdjusting(){return this.valueIsAdjusting}setMaximum(e){this.slider.setAttribute("max",""+e),this.setDatalist()}setMinimum(e){this.slider.setAttribute("min",""+e),this.setDatalist()}setOrientation(e){switch(this.orientation=e,this.element.classList.remove("jslider-horizontal"),this.element.classList.remove("jslider-vertical"),e){case JSSlider.HORIZONTAL:this.element.classList.add("jslider-horizontal");break;case JSSlider.VERTICAL:this.element.classList.add("jslider-vertical")}}getOrientation(){return this.orientation}setInverted(e){e?this.element.classList.add("jslider-inverted"):this.element.classList.remove("jslider-inverted")}setPaintTrack(e){e?this.slider.classList.remove("no-paint-track"):this.slider.classList.add("no-paint-track")}setValue(e){this.slider.setAttribute("value",""+e)}getValue(){return this.slider.valueAsNumber}setEnabled(e){e?this.slider.removeAttribute("disabled"):this.slider.setAttribute("disabled","disabled")}setMajorTickSpacing(e){this.majorTickSpacing=e,this.setDatalist()}setPaintTicks(e){this.paintTicks=e,this.setDatalist()}setPaintLabels(e){this.paintLabels=e,this.setDatalist()}setDatalist(){if(!this.modelAndRenderer&&(this.dataList.textContent="",this.dataList.style.display="none",this.paintTicks&&this.majorTickSpacing)){this.paintLabels&&(this.dataList.style.display="flex");for(let e=parseInt(this.slider.getAttribute("min"));e<=parseInt(this.slider.getAttribute("max"));e+=this.majorTickSpacing){let t=document.createElement("option");switch(t.setAttribute("value",""+e),t.setAttribute("label",""+e),this.orientation){case JSSlider.HORIZONTAL:this.dataList.appendChild(t);break;case JSSlider.VERTICAL:this.dataList.prepend(t)}}}}setModelAndRenderer(e){this.modelAndRenderer=e,this.modelAndRenderer.setSlider(this)}getModelAndRenderer(){return this.modelAndRenderer}}class JSSpinner extends JSComponent{listeners=[];constructor(){super(),this.element=document.createElement("input"),this.element.setAttribute("type","number"),this.element.classList.add("jspinner"),this.element.oninput=e=>this.onchange(),this.element.valueAsNumber=0,LookAndFeel.CURRENT.styleJSSpinner(this)}setModel(e){e.setJSSpinner(this)}addChangeListener(e){this.listeners.push(e)}onchange(){let e=new ChangeEvent;return this.listeners.forEach(t=>{"function"==typeof t?t(e):t.stateChanged(e)}),null}setValue(e){this.element.valueAsNumber=e}getValue(){return this.element.valueAsNumber}setEnabled(e){e?this.element.removeAttribute("disabled"):this.element.setAttribute("disabled","disabled")}}class AbstractComboBoxModelAndRenderer{combobox=null;elements=[];getElementAt(e){return this.elements[e]}setComboBox(e){this.combobox=e,this.elements.forEach(e=>this.addOption(e))}addElement(e){this.elements.push(e),this.combobox&&this.addOption(e)}addOption(e){let t=document.createElement("option");t.textContent=this.render(e),this.combobox.element.appendChild(t)}render(e){}}class DefaultComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer{render(e){return e.toString()}}class AbstractSliderModelAndRenderer{slider=null;renderByDataList=!1;elements=[];constructor(e){this.renderByDataList=e}getElementAt(e){return this.elements[e]}setSlider(e){this.slider=e,this.setDatalist()}addElement(e){this.elements.push(e),this.slider&&this.setDatalist()}setDatalist(){this.slider.setValue(0),this.slider.setMinimum(0),this.slider.setMaximum(this.elements.length-1);let e=this.slider.element.querySelector("datalist");e.textContent="",e.style.display=this.renderByDataList?"flex":"none";let t=this.slider.element.querySelector("div");t.textContent="",t.style.display=this.renderByDataList?"none":"flex",this.elements.forEach((s,i,l)=>{let n=document.createElement("option");switch(n.setAttribute("value",""+i),this.render(s,this.slider,e,t,n),this.slider.getOrientation()){case JSSlider.HORIZONTAL:e.appendChild(n);break;case JSSlider.VERTICAL:e.prepend(n)}})}render(e,t,s,i,l){}}class DefaultSliderModelAndRenderer extends AbstractSliderModelAndRenderer{constructor(){super(!0)}render(e,t,s,i,l){l.setAttribute("label",e.toString())}}class HTMLImageSliderModelAndRenderer extends AbstractSliderModelAndRenderer{constructor(){super(!1)}render(e,t,s,i,l){let n=e.produce();switch(n.onload=e=>{switch(t.getOrientation()){case JSSlider.HORIZONTAL:t.element.querySelector("input").style.marginLeft=n.width/2+"px",t.element.querySelector("input").style.marginRight=n.width/2+"px";break;case JSSlider.VERTICAL:t.element.querySelector("input").style.marginTop=n.height/2+"px",t.element.querySelector("input").style.marginBottom=n.height/2+"px"}return null},t.getOrientation()){case JSSlider.HORIZONTAL:i.appendChild(n);break;case JSSlider.VERTICAL:i.prepend(n)}}}class LookAndFeel{static CURRENT=null;getDescription(){}styleJSButton(e){}styleJSCheckBox(e){}styleJSComboBox(e){}styleJSLabel(e){}styleJSProgressBar(e){}styleJSRadioButton(e){}styleJSSlider(e){}styleJSSpinner(e){}styleJSTabbedPane(e){}styleJSToggleButton(e){}}class BootstrapLookAndFeel extends LookAndFeel{dark=!1;size=null;static create(e,t){return new BootstrapLookAndFeel(e,"",t)}static createSmall(e,t){return new BootstrapLookAndFeel(e,"sm",t)}static createLarge(e,t){return new BootstrapLookAndFeel(e,"lg",t)}constructor(e,t,s){if(super(),document.body.classList.add("bootstraplaf"),this.dark=void 0!==e&&e,this.size=t,void 0===s||s){let i=document.createElement("link");i.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"),i.setAttribute("rel","stylesheet"),document.head.appendChild(i);let l=document.createElement("script");l.setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"),document.head.appendChild(l)}this.dark&&document.documentElement.setAttribute("data-bs-theme","dark")}getDescription(){return"Bootstrap LookAndFeel "+(this.dark?"Dark ":"Light ")+("sm"===this.size?"Small":"lg"===this.size?"Large":"")}styleJSButton(e){e.cssAddClass("btn"),e.cssAddClass("btn-primary"),this.size&&e.cssAddClass("btn-"+this.size)}styleJSCheckBox(e){this.setCheckAndRadio(e)}styleJSComboBox(e){e.element.style.width="auto",e.cssAddClass("form-select"),this.size&&e.cssAddClass("form-select-"+this.size)}styleJSLabel(e){this.setSize(e.element)}styleJSProgressBar(e){switch(this.size){case"sm":e.element.style.fontSize="31px";break;case"lg":e.element.style.fontSize="40px";break;default:e.element.style.fontSize="34px"}}styleJSRadioButton(e){this.setCheckAndRadio(e)}styleJSSlider(e){this.setSize(e.element.querySelector("datalist"))}styleJSSpinner(e){e.element.style.width="auto",e.cssAddClass("form-control"),this.size&&e.cssAddClass("form-control-"+this.size)}styleJSTabbedPane(e){let t=e.element.querySelector(".borderlayout-north");t.classList.add("nav"),t.classList.add("nav-tabs");let s=t.querySelectorAll(".jradiobutton");for(let i=0;i<s.length;i++){let l=s[i];l.classList.add("nav-link");let n=l.querySelector("input");n.style.display="none",n.checked&&l.classList.add("active"),n.addEventListener("change",e=>{let s=t.querySelectorAll(".jradiobutton");for(let i=0;i<s.length;i++)s[i].classList.remove("active");l.classList.add("active")})}}styleJSToggleButton(e){this.setCheckAndRadio(e)}setCheckAndRadio(e){let t=e.element.querySelector("input");switch(t.classList.add("form-check-input"),t.getAttribute("role")){case"switch":t.style.marginRight="0.5em",e.cssAddClass("form-switch"),this.setSize(e.element);break;case"toggle":t.classList.add("btn-check"),e.cssAddClass("btn"),e.cssAddClass("btn-primary"),this.size&&e.cssAddClass("btn-"+this.size);break;default:t.style.marginRight="0.5em",this.setSize(e.element)}}setSize(e){switch(this.size){case"sm":e.style.fontSize="14px";break;case"lg":e.style.fontSize="20px"}}}class DefaultLookAndFeel extends LookAndFeel{constructor(){super(),document.body.classList.add("defaultlaf")}getDescription(){return"Default LookAndFeel"}styleJSButton(e){}styleJSCheckBox(e){}styleJSComboBox(e){}styleJSLabel(e){}styleJSProgressBar(e){}styleJSRadioButton(e){}styleJSSlider(e){}styleJSSpinner(e){}styleJSTabbedPane(e){}styleJSToggleButton(e){}}class SpinnerNumberModel{value=0;minimum=0;maximum=0;stepSize=0;constructor(e,t,s,i){this.value=e,this.minimum=t,this.maximum=s,this.stepSize=i}setJSSpinner(e){e.element.setAttribute("value",""+this.value),e.element.setAttribute("max",""+this.maximum),e.element.setAttribute("min",""+this.minimum),e.element.setAttribute("step",""+this.stepSize)}}class SwingJS{static convert(e){return e}constructor(){}}class AbstractHTMLImageProducer{value=null;constructor(e){this.value=e}produce(){}getValue(){return this.value}}class DefaultHTMLImageProducer extends AbstractHTMLImageProducer{src=null;constructor(e,t){super(e),this.src=t}produce(){let e=document.createElement("img");return e.src=this.src,e}}