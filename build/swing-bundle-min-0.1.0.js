class ActionListener{actionPerformed(e){}}class LayoutManager{css=null;constructor(e){this.css=e}}class BorderLayout extends LayoutManager{static NORTH="North";static SOUTH="South";static EAST="East";static WEST="West";static CENTER="Center";static BEFORE_FIRST_LINE=BorderLayout.NORTH;static AFTER_LAST_LINE=BorderLayout.SOUTH;static BEFORE_LINE_BEGINS=BorderLayout.WEST;static AFTER_LINE_ENDS=BorderLayout.EAST;static PAGE_START=BorderLayout.BEFORE_FIRST_LINE;static PAGE_END=BorderLayout.AFTER_LAST_LINE;static LINE_START=BorderLayout.BEFORE_LINE_BEGINS;static LINE_END=BorderLayout.AFTER_LINE_ENDS;hGap=0;vGap=0;constructor(e,t){super("borderlayout"),this.hGap=e,this.vGap=t}}class FlowLayout extends LayoutManager{static LEFT=0;static CENTER=1;static RIGHT=2;static LEADING=3;static TRAILING=4;align=0;hGap=0;vGap=0;constructor(e,t,a){super("flowlayout"),this.align=e,this.hGap=t,this.vGap=a}}class ActionEvent{}class Color{red=0;green=0;blue=0;constructor(e,t,a){this.red=e,this.green=t,this.blue=a}}class JComponent{element=null;constructor(){}setBackground(e){this.element.style.backgroundColor="rgb("+e.red+", "+e.green+", "+e.blue+")"}}class JButton extends JComponent{listeners=[];constructor(){super(),this.element=document.createElement("button"),this.element.classList.add("jbutton"),this.element.onclick=e=>this.onclick()}setText(e){this.element.textContent=e}addActionListener(e){this.listeners.push(e)}onclick(){let e=new ActionEvent;return this.listeners.forEach(t=>{"function"==typeof t?t(e):t.actionPerformed(e)}),null}}class JFrame extends JComponent{contentPane=new JPanel;constructor(){super(),this.contentPane.element.classList.remove("jpanel"),this.contentPane.element.classList.add("jframe"),this.contentPane.setLayout(new BorderLayout(0,0)),this.element=document.querySelector("body"),this.element.textContent="",this.element.appendChild(this.contentPane.element)}setTitle(e){if(e){let t=document.querySelector("title");t||(t=document.createElement("title"),document.getElementsByTagName("head")[0].appendChild(t)),t.textContent=e}}getContentPane(){return this.contentPane}}class JPanel extends JComponent{layoutManager=null;constructor(){super(),this.element=document.createElement("div"),this.element.classList.add("jpanel"),this.setLayout(new FlowLayout(FlowLayout.CENTER,5,5))}setLayout(e){switch(this.layoutManager&&(this.element.classList.remove(this.layoutManager.css),this.element.style.textAlign="",this.element.textContent=""),this.layoutManager=e,this.element.classList.add(this.layoutManager.css),this.layoutManager.css){case"borderlayout":let t=document.createElement("div");t.classList.add("borderlayout-middle"),this.element.appendChild(t);break;case"flowlayout":switch(this.layoutManager.align){case FlowLayout.LEFT:case FlowLayout.LEADING:this.element.style.textAlign="left";break;case FlowLayout.CENTER:this.element.style.textAlign="center";break;case FlowLayout.RIGHT:case FlowLayout.TRAILING:this.element.style.textAlign="right"}}}add(e,t){switch(this.layoutManager.css){case"borderlayout":switch(e.element.classList.add("borderlayout-"+t.toLowerCase()),t){case BorderLayout.NORTH:this.element.appendChild(e.element),e.element.style.marginBottom=this.layoutManager.vGap+"px";break;case BorderLayout.SOUTH:e.element.style.marginTop=this.layoutManager.vGap+"px",this.element.appendChild(e.element);break;case BorderLayout.WEST:e.element.style.marginLeft=this.layoutManager.hGap+"px",this.element.querySelector(".borderlayout-middle").appendChild(e.element);break;case BorderLayout.CENTER:this.element.querySelector(".borderlayout-middle").appendChild(e.element);break;case BorderLayout.EAST:e.element.style.marginRight=this.layoutManager.hGap+"px",this.element.querySelector(".borderlayout-middle").appendChild(e.element)}break;case"flowlayout":this.element.appendChild(e.element),e.element.style.marginLeft=this.layoutManager.hGap+"px",e.element.style.marginRight=this.layoutManager.hGap+"px",e.element.style.marginTop=this.layoutManager.vGap+"px",e.element.style.marginBottom=this.layoutManager.vGap+"px"}}}