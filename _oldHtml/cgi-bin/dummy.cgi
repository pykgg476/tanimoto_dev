#!/usr/bin/perl
###########################################################
# ファイル名称:: dummy.cgi
#
#   機能: テストCGIスクリプト 
#
# location : URL location
# comments : comments for url
###########################################################
&ReadParse;
$SENDMAIL = '/usr/sbin/sendmail';
$MailTo = 'am-95202@tanimoto-const.co.jp';
###########################################################
print "Content-type: text/html\n\n";
###########################################################
if ($in{'val'} !~ /1/) {
	# トップページ
	print "<HTML>\n";
	print "<HEAD><TITLE>alpha-mail dummy.cgi</TITLE></HEAD>\n";
	print "<BODY>\n";
	print "このページは、CGIのテスト用です。<BR>\n";
	print "以下の入力項目に文字(半角英数字)を入力するとその文字が管理者のメールアドレスに送られます。<P>\n";
	print "<FORM METHOD=post ACTION=/cgi-bin/dummy.cgi>\n";
	print "<INPUT TYPE=hidden NAME=val VALUE=1>\n";
	print "<INPUT TYPE=text NAME=msg>\n";
	print "<INPUT TYPE=submit VALUE=OK>\n";
	print "</BODY>\n";
	print "</HTML>\n";
} else {
	# メール送信処理
	&send_mail;
	# 次ページ
	print "<HTML>\n";
	print "<HEAD><TITLE>alpha-mail dummy.cgi</TITLE></HEAD>\n";
	print "<BODY>\n";
	print "メールをお送りいたしました。<BR>\n";
	print "確認をお願いいたします。<P>\n";
	print "</BODY>\n";
	print "</HTML>\n";
}

exit;

###########################################################
# 入力文字の解析
sub ReadParse
{
	# 以下の変数はローカル
	local ($pair, $key, $val);

	if (&MethGet) {
		# 環境変数 QUERY_STRING に設定された文字列を取得する。
		$in = $ENV{'QUERY_STRING'};
	} elsif ($ENV{'REQUEST_METHOD'} eq "POST") {
		# 標準入力から引き数を取得する。
		read(STDIN,$in,$ENV{'CONTENT_LENGTH'});
		# もし頭に NULL 文字がついていたら取り除く (pending)
		# proxy の設定の関係でこのような対応をしている。
		# 本来ならば不必要なので設定が直ったときにこのしたの一行は削除する。
		$in =~ s/^\0//eg;
	}

	# 入力を分割する。
	@in = split(/&/,$in);

	foreach $pair (@in) {
		# key=val を分割する。
		($key, $val) = split(/=/,$pair);

		# url-encoding された16進数をデコードする。
		$val =~ s/\+/ /g;
		$key =~ s/%([A-F0-9][A-F0-9])/pack("c",hex($1))/egi;
		$val =~ s/%([A-F0-9][A-F0-9])/pack("c",hex($1))/egi;

		# 連想配列 %in に key,val を設定する。
		$in{$key} .= "\0" if (defined($in{$key})); 
		$in{$key} .= $val;
	}
	return length($in); 
}
###########################################################
sub MethGet {
  return ($ENV{'REQUEST_METHOD'} eq "GET");
}
###########################################################
# mail で申込処理をする。
sub send_mail {
	open(MAIL, "| $SENDMAIL -t -oi");
	print MAIL "From: $MailTo\n";
	print MAIL "To: $MailTo\n";
	print MAIL "Subject: dummy.cgi test mail\n\n";
	print MAIL "InputData ->  $in{'msg'}\n";
	close(MAIL);
}
###########################################################
