import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import{MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog',
template: `
    <h1 mat-dialog-title>Delete action</h1>
<div mat-dialog-content>Are you sure you want to delete this post?</div>
<div mat-dialog-actions>
<button mat-button  class="btn-primary" (click)="onConfirmClick()">Yes</button>
  <button mat-button (click)="onNoClick()">No</button>

</div>
  `,
     standalone: true,
    imports: [MatDialogModule, MatButtonModule]
})
export class ConfirmationDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onConfirmClick(): void {
    this.dialogRef.close(true); 
  }

  onNoClick(): void {
    this.dialogRef.close(false); 
  }
}