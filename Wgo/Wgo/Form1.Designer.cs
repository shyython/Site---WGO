namespace Wgo
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            TextEmail = new TextBox();
            TextSenha = new TextBox();
            LblEmail = new Label();
            LblSenha = new Label();
            button2 = new Button();
            button1 = new Button();
            label3 = new Label();
            label5 = new Label();
            label4 = new Label();
            groupBox1 = new GroupBox();
            label6 = new Label();
            LblErroVazio = new Label();
            groupBox1.SuspendLayout();
            SuspendLayout();
            // 
            // TextEmail
            // 
            TextEmail.BorderStyle = BorderStyle.FixedSingle;
            TextEmail.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            TextEmail.Location = new Point(66, 54);
            TextEmail.Name = "TextEmail";
            TextEmail.Size = new Size(145, 29);
            TextEmail.TabIndex = 0;
            // 
            // TextSenha
            // 
            TextSenha.BorderStyle = BorderStyle.FixedSingle;
            TextSenha.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            TextSenha.Location = new Point(66, 143);
            TextSenha.Name = "TextSenha";
            TextSenha.Size = new Size(145, 29);
            TextSenha.TabIndex = 1;
            // 
            // LblEmail
            // 
            LblEmail.AutoSize = true;
            LblEmail.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            LblEmail.Location = new Point(66, 30);
            LblEmail.Name = "LblEmail";
            LblEmail.Size = new Size(48, 21);
            LblEmail.TabIndex = 2;
            LblEmail.Text = "Email";
            // 
            // LblSenha
            // 
            LblSenha.AutoSize = true;
            LblSenha.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            LblSenha.Location = new Point(66, 119);
            LblSenha.Name = "LblSenha";
            LblSenha.Size = new Size(53, 21);
            LblSenha.TabIndex = 3;
            LblSenha.Text = "Senha";
            // 
            // button2
            // 
            button2.BackColor = Color.FromArgb(255, 154, 105);
            button2.FlatStyle = FlatStyle.Popup;
            button2.Font = new Font("Segoe UI", 12F, FontStyle.Bold, GraphicsUnit.Point);
            button2.ForeColor = Color.Transparent;
            button2.Location = new Point(150, 241);
            button2.Name = "button2";
            button2.Size = new Size(97, 31);
            button2.TabIndex = 5;
            button2.Text = "Cadastrar";
            button2.UseVisualStyleBackColor = false;
            button2.Click += button2_Click;
            // 
            // button1
            // 
            button1.FlatStyle = FlatStyle.Flat;
            button1.Font = new Font("Segoe UI", 12F, FontStyle.Bold, GraphicsUnit.Point);
            button1.Location = new Point(47, 241);
            button1.Name = "button1";
            button1.Size = new Size(97, 31);
            button1.TabIndex = 6;
            button1.Text = "Entrar";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Font = new Font("Segoe UI", 8F, FontStyle.Regular, GraphicsUnit.Point);
            label3.ForeColor = Color.FromArgb(255, 154, 105);
            label3.Location = new Point(158, 175);
            label3.Name = "label3";
            label3.Size = new Size(89, 13);
            label3.TabIndex = 7;
            label3.Text = "Esqueci a senha";
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Font = new Font("Segoe UI", 16F, FontStyle.Regular, GraphicsUnit.Point);
            label5.Location = new Point(347, 51);
            label5.Name = "label5";
            label5.Size = new Size(109, 30);
            label5.TabIndex = 9;
            label5.Text = "WeGoOut";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Font = new Font("Segoe UI", 14F, FontStyle.Regular, GraphicsUnit.Point);
            label4.Location = new Point(347, 26);
            label4.Name = "label4";
            label4.Size = new Size(106, 25);
            label4.TabIndex = 10;
            label4.Text = "Bem vindo ";
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(label6);
            groupBox1.Controls.Add(LblErroVazio);
            groupBox1.Controls.Add(label3);
            groupBox1.Controls.Add(button1);
            groupBox1.Controls.Add(button2);
            groupBox1.Controls.Add(LblSenha);
            groupBox1.Controls.Add(LblEmail);
            groupBox1.Controls.Add(TextSenha);
            groupBox1.Controls.Add(TextEmail);
            groupBox1.Location = new Point(499, 51);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(289, 293);
            groupBox1.TabIndex = 11;
            groupBox1.TabStop = false;
            groupBox1.Text = "Login";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Font = new Font("Segoe UI", 8.25F, FontStyle.Bold, GraphicsUnit.Point);
            label6.ForeColor = Color.Red;
            label6.Location = new Point(35, 225);
            label6.Name = "label6";
            label6.Size = new Size(233, 13);
            label6.TabIndex = 9;
            label6.Text = "Email ou senha incorretos tente novamente";
            label6.Visible = false;
            // 
            // LblErroVazio
            // 
            LblErroVazio.AutoSize = true;
            LblErroVazio.Font = new Font("Segoe UI", 8.25F, FontStyle.Bold, GraphicsUnit.Point);
            LblErroVazio.ForeColor = Color.Red;
            LblErroVazio.Location = new Point(87, 199);
            LblErroVazio.Name = "LblErroVazio";
            LblErroVazio.Size = new Size(113, 13);
            LblErroVazio.TabIndex = 8;
            LblErroVazio.Text = "Preencha os campos";
            LblErroVazio.Visible = false;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.Control;
            BackgroundImageLayout = ImageLayout.None;
            ClientSize = new Size(800, 450);
            Controls.Add(groupBox1);
            Controls.Add(label4);
            Controls.Add(label5);
            FormBorderStyle = FormBorderStyle.Fixed3D;
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox TextEmail;
        private TextBox TextSenha;
        private Label LblEmail;
        private Label LblSenha;
        private Button button2;
        private Button button1;
        private Label label3;
        private Label label5;
        private Label label4;
        private GroupBox groupBox1;
        private Label LblErroVazio;
        private Label label6;
    }
}