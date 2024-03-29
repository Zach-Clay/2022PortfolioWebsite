import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {

  kimleyExp: string="";
  schneiderExp: string="";
  
  constructor() { }

  ngOnInit(): void {
    this.schneiderExp = "Gained skills and experience in full stack web development utilizing Vue.js, Node.js, and Express.js JavaScript Frameworks. I also gained familiarity with Microsoft SQL Server, Git, Github, and Azure DevOps.";
    this.kimleyExp = "Further developed my full stack web development skills using Angular, ASP.Net Web API’s, JavaScript, C#, Microsoft SQL Server and Azure Devops.";
  }

}
